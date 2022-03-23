import './myLabel.css';

export interface MyLabelProps {
  /**
   * Name of the Label
   */
  label: string;
  /**
   * Label's size
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * All text Capitalized
   */
  allCaps?: boolean;
  /**
   * Button Colors
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Custom Colors
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
