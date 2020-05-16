<template>
  <div>
    <div class="p-8">
      <span class="inline-flex rounded-md shadow-sm">
        <button @click="notify" class="bttn btn-blue">
          Button
        </button>
      </span>
    </div>
    <div
      class="fixed bottom-0 right-0 flex items-start justify-end px-4 py-6 sm:p-6 pointer-events-none"
    >
      <div class="max-w-sm w-full">
        <transition-group
          tag="div"
          enter-active-class="transform ease-out duration-300 delay-300 transition"
          enter-class="translate-x-4 opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="transition ease-in duration-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          move-class="transition duration-300"
        >
          <Notification
            @remove="removeNotification"
            v-for="(notification, i) in sortedNotifications"
            :key="notification.id"
            :id="notification.id"
            :class="i > 0 ? 'mt-2' : ''"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/notifications/Notification.vue';
export default {
  components: {
    Notification
  },
  data() {
    return {
      count: 0,
      notifications: []
    };
  },
  computed: {
    sortedNotifications() {
      return [...this.notifications].reverse().slice(0, 4);
    }
  },
  methods: {
    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id);
    },
    notify() {
      const notification = { id: this.count };
      this.notifications.push(notification);
      this.count++;
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, 3000);
    }
  }
};
</script>

<style></style>
