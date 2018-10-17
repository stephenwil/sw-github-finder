import * as React from "react";
import { Radio, FormControlLabel } from "@material-ui/core";
import { map } from "lodash";

const RadioField = props => {
  const { options, selected, ...rest } = props;

  if (options) {
    return map(options, option => (
        <FormControlLabel
          control={<Radio />}
          label={option}
          key={option}
          value={option}
          {...rest}
        />
      )
    );
  }
};

export default RadioField;
