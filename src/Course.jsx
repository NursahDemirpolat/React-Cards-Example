import React from 'react'

export const Course = ({ title , description }) => {
  // console.log(props)
  // const title=props.title;
  // const description=props.description;
  // const {title,description} = props;
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}
