/* eslint-disable complexity */

const getClasses = require('../schema/getClasses');
const { getOAuthUserFromRequest } = require('../../oauth/oauth-service');

module.exports = async (Parse) => {
  const schemaClasses = await getClasses();
  for (const schemaClass of schemaClasses) {
    Parse.Cloud.beforeDelete(schemaClass.className, async (req) => {
      if (!req.user) {
        // user is not authenticated, Forbidden.
        throw new Error('User should be authenticated.');
      }
      // authenticate end user using provided token
      const { client: application, user: endUser } =
        await getOAuthUserFromRequest({
          method: 'GET',
          query: {},
          headers: req.headers,
        });

      if (!application || !endUser) {
        throw new Parse.Error(
          401,
          'Please authenticate with OAuth before creating items',
        );
      }
      if (
        req.object?.get('applicationId') &&
        req.object.get('applicationId') !== application.id
      ) {
        // trying to delete the object that was created with this user, but with another application. Forbidden.
        throw new Parse.Error(403, 'Please use OAuth to authenticate');
      }
    });
  }
};