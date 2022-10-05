import React from 'react'
import PropTypes from 'prop-types'

function PropComponent(props){
  return <div>{props.name}</div>
}

PropComponent.defaultProps = {
  name : 'jimmy',
  age : 8,
}

PropComponent.propTypes = {
  name : PropTypes.string,
  // age : PropTypes.number.isRequired,  
  // isRequired 를 붙여주면 꼭 있어주어야하는 값이란 의미이다. age가 없으면 콘솔에 warning 발생
  age : function(props, propName, componentName) {
    if (!/7/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );  // 콘솔창에 내가 커스텀 한 알람이 출력된다.
      }
    }
}

export default function Component() {
  return (
    <div>
      <PropComponent/>
    </div>
  )
}
