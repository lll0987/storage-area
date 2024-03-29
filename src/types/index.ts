import { DirectionType, MaterialType, PositionType, ShapeType, ShelfType, ViewType } from '@/enums';

export interface TSize {
    width: number;
    height: number;
    depth: number;
}

export interface TMaterial {
    color?: string;
    material?: MaterialType;
}

export interface TShape extends TSize, TMaterial {
    type?: ShapeType;
    view?: ViewType;
    border?: boolean;
    borderColor?: string;
    borderWidth?: number;
    highlightColor?: string;
}

export interface TShelf extends TMaterial {
    type?: ShelfType;
    innerSize: TSize;
    outerSize: TSize;
}

export interface TArea extends TShelf {}

export interface TBox extends TSize, TMaterial {
    id: string;
}

export interface TLocation {
    pk: number;
    verticalPK: number;
    horizontalPK: number;
    frontPK: number;
    box?: TBox;
}

export interface TLayer extends TSize {
    spacing: number;
    locations: TLocation[];
}

export interface TSegment {
    length: number;
    spacing: number;
    scaledLength?: number;
    scaledSpacing?: number;
}

export interface ISegment extends TSegment {
    locations: TLocation[];
}

export interface TItem extends TSize {
    segments: ISegment[];
}

export interface TDimension extends TSegment {
    unit?: string;
    direction?: DirectionType;
    position?: PositionType;
    segments?: TSegment[];
}
