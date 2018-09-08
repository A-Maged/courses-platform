import { uiRedirect } from './Ui';
import { login, logout, register } from './Auth';

// export all custom middlewares here - must be array
export default [uiRedirect, login, logout, register];
