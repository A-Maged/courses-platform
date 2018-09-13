import { getNestedProp } from '../utils';

// usage
// namedRoutes('app.courses.edit', { id: 1 });
const namedRoutes = (key, term) => {
  let { token, id } = term || {};

  let routes = {
    app: {
      root: '/app/home',
      auth: {
        login: '/app/login',
        logout: '/app/logout',
        register: '/app/register'
      },
      courses: {
        index: '/app/courses',
        show: `/app/courses/${id}`,
        create: '/app/courses/create',
        edit: `/app/courses/${id}/edit`
      },

      videos: {
        create: '/app/videos/create',
        edit: `/app/videos/${id}/edit`
      }
    },

    //   ***************************************

    server: {
      auth: {
        is_authenticated: '/is_authenticated',
        login: '/login',
        logout: '/logout',
        register: '/register',
        password: {
          email: '/password/email',
          request: '/password/reset',
          reset: `/password/reset/${token}`
        }
      },

      courses: {
        index: '/courses',
        store: '/courses',
        show: `/courses/${id}`,
        update: `/courses/${id}`,
        destroy: `/courses/${id}`
      },

      videos: {
        store: '/videos',
        show: `/videos/${id}`,
        update: `/videos/${id}`,
        destroy: `/videos/${id}`
      }
    }
  };

  return getNestedProp(routes, key);
};

export default namedRoutes;
