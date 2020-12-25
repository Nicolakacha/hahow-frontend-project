# Hahow Frontend Project

本專案為 [Hahow Frontend Engineer 徵才小專案](https://github.com/hahow/hahow-recruit/blob/master/frontend.md) 的練習。


## 如何執行

### `npm install`

安裝此專案所需的第三方套件

### `yarn start`

在 [http://localhost:3000](http://localhost:3000) 上啟動此專案

### `yarn build`

在 `build` 資料夾中建立此專案的 production 版本

### `yarn deploy`

在 GitHub Page 上部屬此專案網站

## 專案 DEMO

[GitHub Page Demo](https://nicolakacha.github.io/hahow-frontend-project/heroes)


## 專案架構

```
|   README.md
|   package.json
|   package-lock.json
|   yarn.lock
|   
+---node_modules
|           
+---public
|       
\---src
    |  index.js              // 程式入口點
    |  App.js                // App component
    |  webAPI.js             // 串接 API
    |   
    +---components           // React components
    |      AbilityBox.js     
    |      ActionButton.js
    |      CounterButton.js
    |      HeroCard.js
    |      index.js
    |       
    +---constants            // 樣式與螢幕尺寸斷點等常數
    |      breakpoint.js
    |      globalStyle.js
    |       
    +---hooks                // Custom hook 處理邏輯
    |      useHero.js
    |       
    +---pages                // 頁面
    |      HeroListPage.js
    |      HeroProfilePage.js
    |      index.js
    |       
    \---redux                // 狀態管理
          heroSlice.js
          store.js
```

### 使用 React Router 6 達成分頁功能，Page 目錄分出兩個分頁
- `HeroListPage.js` \
  顯示三個 Heroes 的資訊
- `HeroProfilePage.js` \
  每個 Hero 的 HeroProfile 能力值頁面

### 使用 styled components，components 目錄切出 4 個元件
- `AbilityBox.js` \
  用來顯示一個能力值以及並對其進行增減
- `ActionButton.js` \
  儲存能力值的按鈕
- `CounterButton.js` \
  增減能力值的按紐
- `HeroCard.js` \
  HeroListPage 中每個英雄人物的卡片

### 使用 Redux toolkit 管理狀態
- `heroSlice.js`
- `store.js`

將邏輯部分獨立成 custom hook
- `useHero.js`


## 使用的第三方 library

### styled-components
- styled-components 是一個 CSS-in-JS library，讓 CSS 樣式能直接寫在 component 中，進而更好的讓 React 達成組件化開發，方便管理個個 component 的樣式。
- 會為 component 生成獨一的 class 名稱，可以避免自行取名時的困擾。
- 自動 Prefix 功能，解決瀏覽器兼容性問題。

### react-redux
- Redux 是一個狀態管理套件，當 states 是需要在不同的 components 之間共用，或是需要進行一連串複雜的更新時，使用 Redux 來管理共同的 states，可以讓 debug、測試或是重構都變得更加容易。
- 由 Redux 所管理的 states，可以讓，只能夠過 dispatch 不同的 action 觸發 reducer 以更新。

### react-router-dom
藉由 react-router-dom 來達到用來達成 URL 切換，實現頁面功能。

## 專案的註解原則

- 在 useEffect 呼叫 function 時，寫清楚為什麼在此需要呼叫 function，例如：
  ```js
  // should get hero profile and reset message once page is mounted
    useEffect(() => {
      handleGetHeroProfile(heroId);
      resetMessage();
    }, [heroId]);
  ```

- 在較不直觀的程式碼中加上註解
  ```js
  // the points that heros has currently.
    const currentPoints = Object.values(heroProfile).reduce(
      (acc, cur) => acc + cur
    );
  ```

## 遇到的困難、問題，以及解決的方法

- 如何才能讓 HeroCard 被點到時能改變樣式？ \
  解決方法：利用 react-router-dom 的 NavLink 包住 HeroCard，當被 NavLink 被點擊切換到該 Hero 的 HeroProfilePage，NavLink 會加上 active 的 className，就可以利用來定義當前 HeroCard 的樣式。

- 部屬在 GitHub 上時，如何讓網址列達成想要的樣子？
  因為專案的首頁是部屬在 `https://nicolakacha.github.io/hahow-frontend-project/`，但 HeroListPage 和 HeroProfilePage 的 URL 都要有 `/heroes`，所以把 Routes 的 basename 改成 `'hahow-frontend-project/heroes'` 來達到想要的 URL 呈現。

