import React from "react";

class EditBurgerForm extends React.Component {
  handleChange = (event) => {
    const updatedBurger = {
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateBurger(this.props.index, updatedBurger);
  };

  render() {
    return (
      <div className="burger-edit">
        <input
          name="name"
          autoComplete="off"
          value={this.props.burger.name}
          onChange={this.handleChange}
        />
        <input
          name="price"
          autoComplete="off"
          value={this.props.burger.price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          className="status"
          value={this.props.burger.status}
          onChange={this.handleChange}
        >
          <option value="available">Доступно</option>
          <option value="unavailable">Не доступноы</option>
        </select>
        <textarea
          name="desc"
          placeholder="Desc"
          value={this.props.burger.desc}
          onChange={this.handleChange}
        />
        <input
          name="image"
          autoComplete="off"
          value={this.props.burger.image}
          onChange={this.handleChange}
        />
        <button onClick={()=>{
            this.props.deleteBurger(this.props.index)
        }}>Удалить из меню</button>
      </div>
    );
  }
}

export default EditBurgerForm;
