// Also set Powercord global var stuff here since entities import is needed to use Plugin (which every PC plugin uses)

export const powercord = {
  api: {
    commands: {
      registerCommand: ({ command, alias, description, usage, executor }) => {
        // TODO: implement alias

        goosemodScope.patcher.commands.add(command, description,
          ( { args: [ { text } ] } ) => {
            const out = executor(text.split(' ')); // Run original executor func

            if (!out.send) return goosemodScope.patcher.internalMessage(out.result); // PC impl. sends internal message when out.send === false, so we also do the same via our previous Patcher API function
            // When send is true, we send it as a message via returning obj with content

            return {
              content: out.result
            };
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
      onImport: this.startPlugin,
      onRemove: this.pluginWillUnload
    };
  }
}