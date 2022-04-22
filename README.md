# ReactMemo
 
<h1>How to use React memo in react-native.</h1>

This example renders a list of user items and allows us to add users to the list.

Whenever we type into the input field, only the app component re-renders because it's the only component affected by the changed state. The List component receives its memoized props from before, which haven't changed, and thus doesn't re-render at all. The ListItem follows suit because the List component already prevents the re-render.

If we add an item to the list, all the previous items in the list remains the same and thus doesn't re-render and only the new item added renders due to memoized ListItem component.

<a href="url"><img src="https://user-images.githubusercontent.com/6311330/164647263-be79703f-a6d6-46d2-88ac-64fff8630c9a.png" align="left" height="700" width="480" ></a>
