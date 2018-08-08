import React from 'react';

import { createRootNavigator } from './src/navigation/routes';

class ProviderApp extends React.Component {
  render() {
    const RootNavigator = createRootNavigator(true);
    return <RootNavigator />;
  }
}

export default ProviderApp;