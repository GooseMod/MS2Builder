// Also set Powercord global var stuff here since entities import is needed to use Plugin (which every PC plugin uses)

window.powercord = {
  api: {
    commands: {
      registerCommand: ({ command, description, _usage, executor }) => {
        goosemodScope.patcher.commands.add(command, description,
          ( { message: [ { text } ] } ) => {
            const out = executor(text.split(' ')); // Run original executor func

            if (!out.send) return; // PC impl. sends internal message when out.send === true, so we also do the same via our previous Patcher API function, seen below
            goosemodScope.patcher.internalMessage(out.result);
          }, [
          { type: 3, required: false, name: 'args', description: 'Arguments for PC command' } // Argument for any string for compat. with PC's classical commands
        ])
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