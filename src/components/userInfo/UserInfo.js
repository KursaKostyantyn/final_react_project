import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.userInfoWrap}>
            <div className={css.circleWrap}>
                <div className={css.circle}>
                    K
                </div>
            </div>
            <div className={css.name}>
                Kursa
            </div>
        </div>
    )
}

export {
    UserInfo
}