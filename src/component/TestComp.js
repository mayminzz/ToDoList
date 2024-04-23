import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
}

const TestComp = () => {
  // const [ count, setCount ] = useState(0);
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };
  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  // useStat의 상위버전, 너무 모든 데이터가 집중되어지는 것을 사전에 차단하기 위한 목적으로 사용
  // 초기값을 인자값으로 받음 결과값은 배열값을 반환하는데 이 배열안에 state 의 상태변화의 값이 담길 상태값, 상태를 벼화시키는 데에 영향을 미치는 함수
  // count: 상태 변화의 값을 담고 있었던 state 변수 값이 담겨지는 요소
  // dispatch: 상태 변화를 일으키고 구분짓는 함수
  // reducer: 상태의 변화에 따라서 실제 실행하게 만드는 실행부의 함수
  //  0: state 변수에 담길 초기값
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE", data: 1 });
  const onDecrease = () => dispatch({ type: "DECREASE", data: 1 });
  const onInit = () => dispatch({ type: "INIT" });
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onInit}>초기화</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default TestComp;
