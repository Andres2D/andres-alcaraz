interface CustomWindow extends Window {
  posthog: any;
}

declare let window: CustomWindow;

export const captureEvent = (eventName: string) => {
  window.posthog.capture(eventName);
};
