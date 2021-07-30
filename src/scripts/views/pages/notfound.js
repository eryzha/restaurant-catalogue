const NotFound = {
  async render() {
    return `
    <h2 class="center">Page not found.</h2>
    `;
  },

  async afterRender() {
    // eslint-disable-next-line no-console
    console.warn('Page not found.');
  },
};

export default NotFound;
