import React from "react";
import "../App.css";
import { TextField, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PersonIcon from "@material-ui/icons/Person";

const signup = () => {
  return (
    <div>
      <div className="icon">
        <div className="icon_class">
          <PersonIcon fontSize="large" />
        </div>
        <div className="text">Sign up</div>
      </div>

      <div className="row m-2">
        <div className="col-6  p-2">
          <TextField
            id="firstname"
            type="text"
            variant="outlined"
            label="enter first name"
            fullWidth
          />
        </div>

        <div className="col-6  p-2">
          <TextField
            id="lasttname"
            type="text"
            variant="outlined"
            label="enter last name"
            fullWidth
          />
        </div>
      </div>

      <div className="row m-2">
        <TextField
          id="email"
          className="p-2"
          type="text"
          variant="outlined"
          label="enter email"
          fullWidth
        />
        <TextField
          id="password"
          className="p-2"
          type="text"
          variant="outlined"
          label="enter password"
          fullWidth
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checked"
            />
          }
          label="I agree to all terms and conditions ."
        />
        <Button variant="contained" color="primary">
          {" "}
          Create Account{" "}
        </Button>
      </div>
      <Divider variant="middle" />
      <p className="text-center">
        <Link to="/" className="text-black-50">
          <h5> Already have an account </h5>
        </Link>
      </p>
    </div>
  );
};

export default signup;
