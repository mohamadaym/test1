import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
class FormulateMessageDto {
    @Field(() => Date)
    @Type(() => Date)
    productionDateTime!: Date;

    @Field(() => Date)
    @Type(() => Date)
    expiryDate!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    batchNumber!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    sku!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    poNumber!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    message?: string;

    @Field(() => Number, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Number
    })
    @Type(() => Number)
    shelfLife?: number;
}

export { FormulateMessageDto as FormulateMessageDto };