import { ValidationRuleFactory } from "form-container";
import * as isAlphanumeric from "validator/lib/isAlphanumeric";

const isRequired = value => !!value;
const isAlphaNumeric = value => (value ? isAlphanumeric(value) : true);

export const required = ValidationRuleFactory(
  isRequired,
  "This field is required"
);

export const alphaNumeric = ValidationRuleFactory(
  isAlphaNumeric,
  "This field needs to be alphanumeric"
);
