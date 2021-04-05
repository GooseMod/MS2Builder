// Also set Powercord global var stuff here since entities import is needed to use Plugin (which every PC plugin uses)

const sendMessage = goosemodScope.webpackModules.findByProps('sendMessage', 'receiveMessage').sendMessage;
const getChannelId = goosemod.webpackModules.findByProps('getChannelId').getChannelId;

export const powercord = {
  api: {
    commands: {
      registerCommand: ({ command, alias, description, usage, executor }) => {
        // TODO: implement alias

        goosemodScope.patcher.commands.add(command, description,
          async ( { args: [ { text } ] } ) => {
            const out = await executor(text.split(' ')); // Run original executor func (await incase it's an async function)

            console.log(out);

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
      },

      unregisterCommand: (command) => {
        goosemodScope.patcher.commands.remove(command);
      }
    },

    notices: {
      sendToast: (_id, { header, content, type, buttons }) => {
        // TODO: implement full toast in future instead of just small current GM toast

        goosemodScope.showToast(content);
      }
    }
  }
};

export class Plugin {
  constructor() {

  }

  get goosemodHandlers() {
    return {
      onImport: this.startPlugin.bind(this),
      onRemove: this.pluginWillUnload.bind(this)
    };
  }
}