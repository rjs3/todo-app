import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => (
  <div role="form" className="todoForm">
    <Grid cols="8">
      <input
        id="description"
        className="form-control"
        placeholder="Adicione uma tarefa"
        onChange={props.handleChange}
        value={props.description}
      />
    </Grid>

    <Grid cols="4">
      <IconButton
        style="primary btn-add"
        icon="plus"
        onClick={props.handleAdd}
      />
      <IconButton
        style="default btn-add"
        icon="search"
        onClick={props.handleSearch}
      />
      <IconButton
        style="danger btn-add"
        icon="close"
        onClick={props.handleClear}
      />
    </Grid>
  </div>
);
