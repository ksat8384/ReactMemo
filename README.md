# ReactMemo
 
<h1>How to use React memo in react-native.</h1>

This example renders a list of user items and allows us to add users to the list.

Whenever we type into the input field, only the app component re-renders because it's the only component affected by the changed state. The List component receives its memoized props from before, which haven't changed, and thus doesn't re-render at all. The ListItem follows suit because the List component already prevents the re-render.

If we add an item to the list, all the previous items in the list remains the same and thus doesn't re-render and only the new item added renders due to memoized ListItem component.
