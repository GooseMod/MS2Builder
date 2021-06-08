const sendMessage = goosemodScope.webpackModules.findByProps('sendMessage', 'receiveMessage').sendMessage;
const getChannelId = goosemodScope.webpackModules.findByProps('getChannelId').getChannelId;

export const registerCommand = ({ command, alias, description, usage, executor }) => {
  // TODO: implement alias

  goosemodScope.patcher.commands.add(command, description,
    async (ret) => {
      // Don't just destructure as using without text arguments returns empty object ({})

      let textGiven = '';
      if (ret.args) {
        const { args: [ { text } ] } = ret;
        textGiven = text;
      }

      const out = await executor(textGiven.split(' ')); // Run original executor func (await incase it's an async function)

      if (!out.send) {
        goosemodScope.patcher.internalMessage(out.result); // PC impl. sends internal message when out.send === false, so we also do the same via our previous Patcher API function

        return;
      }

      // When send is true, we send it as a message via sendMessage

      sendMessage(getChannelId(), {
        content: out.result,

        tts: false,
        invalidEmojis: [],
        validNonShortcutEmojis: []
      });
    }, [
    { type: 3, required: false, name: 'args', description: 'Arguments for PC command' } // Argument for any string for compat. with PC's classical commands
  ]);
};

export const unregisterCommand = (command) => {
  goosemodScope.patcher.commands.remove(command);
};