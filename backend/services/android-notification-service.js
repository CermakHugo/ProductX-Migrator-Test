

const notifier = require('node-notifier');
const permissions = require('node-permissions');

class AndroidNotificationService {
  async createNotificationChannel(channelId, channelName) {
    if (!channelId || !channelName) {
      throw new Error('Channel ID and name are required');
    }

    try {
      const channel = await notifier.getChannel(channelId);
      if (channel) {
        return;
      }

      await notifier.setup({
        channelId,
        channelName,
      });
    } catch (error) {
      throw new Error(`Error creating notification channel: ${error}`);
    }
  }

  async requestPostNotificationsPermission() {
    try {
      const permissionStatus = await permissions.check('postNotifications');
      if (permissionStatus === 'granted') {
        return;
      }

      await permissions.request('postNotifications', true);
    } catch (error) {
      throw new Error(`Error requesting post notifications permission: ${error}`);
    }
  }

  async processIntentExtras(intentExtras) {
    if (!intentExtras) {
      throw new Error('Intent extras are required');
    }

    try {
      const preferences = {};
      Object.keys(intentExtras).forEach((key) => {
        preferences[key] = intentExtras[key];
      });
      return preferences;
    } catch (error) {
      throw new Error(`Error processing intent extras: ${error}`);
    }
  }
}

module.exports = AndroidNotificationService;