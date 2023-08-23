import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  IRouter
} from '@jupyterlab/application';

import { Widget } from '@lumino/widgets';

import { ITopBar } from 'jupyterlab-topbar';

import '@jupyterlab/application/style/buttons.css';

import '../style/index.css';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-logout:plugin',
  autoStart: true,
  requires: [IRouter, ITopBar],
  activate: async (app: JupyterFrontEnd, router: IRouter, topBar: ITopBar) => {
    const logout = document.createElement('a');
    logout.id = 'logout';
    logout.innerHTML = 'Log Out';
    logout.addEventListener('click', () => {
      router.navigate('/logout', { hard: true });
    });

    const widget = new Widget({ node: logout });
    widget.addClass('jp-Button-flat');
    topBar.addItem('logout-button', widget);

    const control = document.createElement('a');
    control.id = 'control';
    control.innerHTML = 'Control';
    control.addEventListener('click', () => {
    router.navigate('../../home', { hard: true }); });
      
    const widget_ct = new Widget({ node: control });
    widget_ct.addClass('jp-Button-flat');
    topBar.addItem('control-button', widget_ct);
  }
};

export default extension;
