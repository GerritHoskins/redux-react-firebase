import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

import AddTodo from './../containers/AddTodo';
import { DialogTitle } from '@material-ui/core';

const Footer = () => (
  <div>
    <DialogTitle>Show: </DialogTitle>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <AddTodo />
  </div>
)

export default Footer
