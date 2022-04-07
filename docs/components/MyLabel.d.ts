/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, }: MyLabelProps) => JSX.Element;
