const Footer = ({totalItems,pendingItems,completedItems}) => {
    
    return (
        <div className="footerWrapper">
            <footer>Pending: {pendingItems}, Completed: {completedItems}, <b>Total Items: {totalItems}</b></footer>
        </div>
        )
};

export default Footer;