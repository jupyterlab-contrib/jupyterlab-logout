import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-logout extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-logout:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-logout is activated!');
  }
};

export default extension;
