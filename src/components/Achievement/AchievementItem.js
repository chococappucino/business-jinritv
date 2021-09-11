import classes from './AchievementItem.module.css';

const AchievementItem = props => {
  return (
    <div className={classes.AchievementItem}>
      <p className={classes.ValueText} style={{ color: `${props.valueColor}` }}>
        {props.value}
      </p>
      <p className={classes.DescriptionText}>{props.description}</p>
    </div>
  );
};

export default AchievementItem;
