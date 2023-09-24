import React from 'react';
import { makeStyles, Container, Tabs, Tab } from '@mui/material';
import { useParams, useRouteMatch, Link, Route, Switch } from 'react-router-dom';
import UserProfile from '../../components/user/UserProfile';
import UserOrders from '../../components/user/UserOrders';
import UserSettings from '../../components/user/UserSettings';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  tabs: {
    marginBottom: theme.spacing(2),
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const { userId } = useParams();
  const { url, path } = useRouteMatch();

  return (
    <Container className={classes.container}>
      <Tabs value={false} className={classes.tabs}>
        <Tab label="Perfil" component={Link} to={`${url}`} />
        <Tab label="Órdenes" component={Link} to={`${url}/orders`} />
        <Tab label="Configuración" component={Link} to={`${url}/settings`} />
      </Tabs>
      <Switch>
        <Route exact path={path}>
          <UserProfile userId={userId} />
        </Route>
        <Route path={`${path}/orders`}>
          <UserOrders userId={userId} />
        </Route>
        <Route path={`${path}/settings`}>
          <UserSettings userId={userId} />
        </Route>
      </Switch>
    </Container>
  );
};

export default ProfilePage;
