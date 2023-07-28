# Hover_RayCast_ThreeJS
Project made for tutorial on how to use ray cast to get a list of objects the mouse is hovering over. Uses ThreeJS.

--------------------------------------------------------------------------------------------------------------------
STEPS TO RAY CAST:

1. Add the ./src/helpers/RayCastHelper.js file to your project and import it.
2. Create an event listener to trigger when the mouse moves.
3. When the mouse moves, call RayCastHelper.getMouseVector2 and set the value to a Vector2.
4. Immediately after getMouseVector2 call RayCastHelper.checkRayIntersections.
  - Optionally: set the final parameter (getFirstValue) to true to only get the first intersecting value.
  - This will always return a list. If getFirstValue is set to true, the list will never have more than 1 item.
5. The response from RayCastHelper.checkRayIntersections will represent the objects the mouse is hovering over.  
