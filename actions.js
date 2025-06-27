

package actions;

import java.util.HashMap;
import java.util.Map;

/**
 * Action creators for the VisualStateGroup endpoint.
 */
public class VisualStateGroupActions {
    /**
     * Action type for updating the visual state.
     */
    public static final String UPDATE_VISUAL_STATE = "UPDATE_VISUAL_STATE";

    /**
     * Action type for resetting the visual state.
     */
    public static final String RESET_VISUAL_STATE = "RESET_VISUAL_STATE";

    /**
     * Creates an action to update the visual state.
     * 
     * @param newState the new visual state
     * @return the update visual state action
     */
    public static Map<String, Object> updateVisualState(String newState) {
        if (newState == null || newState.isEmpty()) {
            throw new IllegalArgumentException("newState cannot be null or empty");
        }
        Map<String, Object> action = new HashMap<>();
        action.put("type", UPDATE_VISUAL_STATE);
        action.put("newState", newState);
        return action;
    }

    /**
     * Creates an action to reset the visual state.
     * 
     * @return the reset visual state action
     */
    public static Map<String, Object> resetVisualState() {
        Map<String, Object> action = new HashMap<>();
        action.put("type", RESET_VISUAL_STATE);
        return action;
    }
}