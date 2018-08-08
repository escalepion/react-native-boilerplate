import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Index from '../screens/Index';

import LogIn from '../screens/auth/LogIn';
import SignOut from '../screens/auth/SignOut';

export const LoggedIn = createStackNavigator({
    Index: { 
        screen: Index,
        navigationOptions: {
            title: 'Home',
            headerLeft: null
        }
    }
    });

    export const DrawNav = createDrawerNavigator(
    {
        LoggedMain: {
        path: '/',
        screen: LoggedIn,
        navigationOptions: {
            drawerLabel: 'Main'
        }
        },
        SignOut: {
        path: '/sent',
        screen: SignOut,
        navigationOptions: {
            drawerLabel: 'Sign Out'
        }
        },
    },
    {
        initialRouteName: 'LoggedMain',
        contentOptions: {
        activeTintColor: '#e91e63',
        },
    }
    );

    export const LoggedOut = createStackNavigator({
        LogIn: {
            screen: LogIn,
            navigationOptions: {
                title: 'Log In'
            }
        }
    });

    export const createRootNavigator = (signedIn = false) => {
        return createStackNavigator(
          {
            SignedIn: {
                screen: DrawNav,
                navigationOptions: {
                gesturesEnabled: false
                }
            },
            SignedOut: {
              screen: LoggedOut,
              navigationOptions: {
                gesturesEnabled: false
              }
            }
          },
          {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
          }
        );
      };