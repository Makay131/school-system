import Styles from "./styles/Announcements.module.css";

const Announcements = () => {
  return (
    <div className={Styles["anns-container"]}>
        <div className={Styles["anns-title-container"]}>
            <h3 className={Styles["anns-title"]}>Announcements</h3>
            <span className={Styles["anns-title-detail"]}>View All</span>
        </div>
        <div className={Styles["anns-content-container"]}>
            <div className={Styles["anns-content-container__sub"]}>
                <div className={Styles["anns-content-container__sub--top"]}>
                    <h4 className={Styles["anns-content-title"]}>Lorem ipsum dolor sit amet consectetur</h4>
                    <span className={Styles["anns-content-title-detail"]}>2025-01-01</span>
                </div>
                <p className={Styles["anns-content-detail"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fugiat.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements