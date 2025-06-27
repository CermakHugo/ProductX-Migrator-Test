

package backend.enums;

/**
 * Enum to represent the ownership of a JNI handle.
 */
public enum JniHandleOwnership {
    /**
     * No ownership, the handle is not managed by the JVM.
     */
    NONE,
    /**
     * Local ownership, the handle is valid only within the current native method call.
     */
    LOCAL,
    /**
     * Global ownership, the handle is valid until it is explicitly released.
     */
    GLOBAL,
    /**
     * Global reference ownership, the handle is a global reference to an object.
     */
    GLOBAL_REF,
    /**
     * Weak global reference ownership, the handle is a weak global reference to an object.
     */
    WEAK_GLOBAL_REF
}