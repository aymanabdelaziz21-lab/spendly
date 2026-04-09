import { RiErrorWarningLine } from "react-icons/ri";

const EmptyState = ({
    title = "Nothing here yet",
    description = "Start adding data to see it here.",
    actionLabel,
    onAction,
}) => {
    return (
        <div className="empty-state card">

            <div className="empty-icon">
                <RiErrorWarningLine size={42} />
            </div>

            <h3 className="empty-title">{title}</h3>

            <p className="empty-description">
                {description}
            </p>

            {actionLabel && (
                <button className="empty-action" onClick={onAction}>
                    {actionLabel}
                </button>
            )}
        </div>
    );
}


export default EmptyState