/*
 * @Author: wkylin.w
 * @Date: 2020-08-02 11:34:05
 * @Last Modified by: wkylin.w
 * @Last Modified time: 2020-09-05 15:11:39
 */
import './App.css'

import React from 'react'
import UseForwardRef from './components/useRef/forwardRef'
// import MoviesList from './components/langContext/MoviesList'
// import UseRefApp from './components/useRef/UseRefApp'
// import LazyFn from './components/LazyFn/LazyFn'
// import DogList from './components/infiniteList/DogList'

// import ShowModal from './components/useLockBodyScroll/ShowModal'
// import LayoutApp from './layout/layouts'
// import StateApp from './components/globalState/StateApp'

// import MaximizablView from './components/useFullscreenStatus/MaximizableView';
// import ImageLoadPage from './components/imageLoad/ImageLoadPage';

// import TodoList from './components/useWhenVisible/TodoList';
// import NewsLetterBanner from './components/useTimeout/NewsLetterBanner'
// import ShoppingList from './components/useInterval/ShoppingList'
// import RefButton from './components/useRef/useSyncedRef/RefButton'
// import UseClickAway from './components/useClickAway/UseClickAwayFn'
// import ThemeForContext from './components/useContext/ThemeForContext';
// import InputSearch from './components/useDebounce/InputSearch';

// import MyComponent from './fetch/MyComponent'

// import ClickButton from './components/useRef/ClickButton';
// import FetchData from './components/fetchData/FetchData';
// import ErrorHandlingData from './components/fetchData/ErrorHandlingData';
// import UseLocalStorageApp from './components/FunctionComponent/UseLocalStorage';
// import ForwardRef from './components/FunctionComponent/ForwardRef';
// import ReRender from './components/FunctionComponent/ReRender';
// import ReRender from './components/FunctionComponent/ReRender';
// import NoRender from './components/FunctionComponent/NoRender';

// import React, { useEffect } from 'react';
// import AsyncFnCom from './components/FunctionComponent/AsyncFnCom';

// import FnCom from './components/FunctionComponent/FnCom';
// import UserList from './components/useMemo/userList/UserList';

// import MoveListApp from "./components/moveList/MoveListApp";
// import UseMemoDemo from './components/useMemo/UseMemoDemo';
// import useWindowSize from './components/useWindowSize/useWindowSize';
// import useEffectExceptOnMount from './components/useEffectExceptOnMount/useEffectExceptOnMount';
// import DebouncedInput from './components/DebouncedInput/DebouncedInput';
// import { RequireContext } from './components/requireContext/requireContext';

// import Parent from './components/ReactSmartInRender/Parent';
// import Parent2 from './components/ReactSmartInRender/Parent2';
// import Parent3 from './components/ReactSmartInRender/Parent3';
// import Parent4 from './components/ReactSmartInRender/Parent4';
// import Parent5 from './components/ReactSmartInRender/Parent5';
// import Parent6 from './components/ReactSmartInRender/Parent6';
// import Parent7 from './components/ReactSmartInRender/Parent7';

// const userLang = navigator.language;
// const defaultLocale = userLang.substring(0, 2);

function App() {
  // const [width, height] = useWindowSize();
  //
  // useEffectExceptOnMount(() => {
  // }, [width]);
  //
  // useEffect(() => {
  // }, [width]);

  return (
    <>
      <UseForwardRef />
      {/* <LazyFn /> */}
      {/* <DogList /> */}
      {/* <UseRefApp /> */}
      {/* <MoviesList /> */}
      {/* <StateApp /> */}
      {/* <LayoutApp /> */}
      {/* <ShowModal /> */}
      {/* <ImageLoadPage /> */}
      {/* <MaximizablView backgroundColor="#efefef">全屏模式</MaximizablView> */}
      {/* <UseClickAway /> */}
      {/* <RefButton /> */}
      {/* <ShoppingList /> */}
      {/*
        <NewsLetterBanner />
        */}

      {/* <TodoList /> */}

      {/* <InputSearch /> */}
      {/* <ThemeForContext /> */}
      {/* <Parent7 /> */}
      {/* <UserList /> */}
      {/*<p>User Lang: {`${userLang}-- ${defaultLocale}`}</p>*/}
      {/*<DebouncedInput*/}
      {/*  placeholder='init value'*/}
      {/*  onDebouncedValChange={val => {*/}
      {/*  }}*/}
      {/*  delay={300}*/}
      {/*/>*/}
      {/*<UseMemoDemo />*/}
      {/*<p>Window Width: {width}; Window Height: {height}</p>*/}
      {/*<MoveListApp />*/}
      {/*<RequireContext />*/}
    </>
  )
}

export default App
