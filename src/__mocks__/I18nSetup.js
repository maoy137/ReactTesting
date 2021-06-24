jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: (key) => key };
    return Component;
  },
  useTranslation: () => ({
    t: jest.fn((key) => key),
    i18n: {
      changeLanguage: jest.fn().mockResolvedValue({}),
    },
  }),
}));
