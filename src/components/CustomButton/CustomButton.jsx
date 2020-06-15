import React from "react";

import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";
import isBoolean from "lodash/isBoolean";
import isFunction from "lodash/isFunction";
import isString from "lodash/isString";

function CustomButton(props) {
  const {
    isVisible,
    url,
    active,
    block,
    color,
    disabled,
    outline,
    innerRef,
    onClick,
    size,
    className,
    classIcon,
    label,
    buttonSize,
    type,
    iconPosition
  } = props;
  let content = <div />;

  if (isVisible === true) {
    content =
      isNil(url) || isEmpty(url) ? (
        <button
          type={isNil(type) ? "button" : type}
          disabled={isBoolean(disabled) ? disabled : false}
          onClick={() => {
            if (isFunction(onClick)) {
              return onClick();
            }
          }}
          className={
            isNil(className) === false && isString(className)
              ? `btn ${className} ${isNil(buttonSize) ? "" : buttonSize}`
              : `btn btn-default ${isNil(buttonSize) ? "" : buttonSize}`
          }
        >
          {isNil(classIcon) === false &&
          isString(classIcon) &&
          iconPosition === "left" ? (
            <i className={classIcon} />
          ) : null}

          {isNil(label) === false && isString(label) ? label : ""}

          {isNil(classIcon) === false &&
          isString(classIcon) &&
          iconPosition === "right" ? (
            <i className={classIcon} />
          ) : null}
        </button>
      ) : (
        <a
          href={isNil(url) === false ? url : "https://"}
          download
          disabled={isBoolean(disabled) ? disabled : false}
          onClick={() => {
            if (isFunction(onClick)) {
              return onClick();
            }
          }}
          className={
            isNil(className) === false && isString(className)
              ? `btn ${className} ${isNil(buttonSize) ? "" : buttonSize}`
              : `btn btn-default ${isNil(buttonSize) ? "" : buttonSize}`
          }
        >
          {isNil(classIcon) === false && isString(classIcon) ? (
            <i className={classIcon} />
          ) : null}
          {isNil(label) === false && isString(label) ? label : ""}
        </a>
      );
  }
  return content;
}

export default CustomButton;