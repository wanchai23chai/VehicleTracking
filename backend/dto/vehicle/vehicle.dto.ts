import { ApiProperty } from "@nestjs/swagger";
import { PagingDto } from "../commont.dto";
import * as moment from 'moment'
class SearchCriteriaVehicle {
	@ApiProperty({ example: moment().startOf('month').toISOString() })
	start_date: string
	@ApiProperty({ example: moment().toISOString() })
	end_date: string
}

export class SearchVehicleDto {
	@ApiProperty()
	vehicle_name: string;
	@ApiProperty({ type: () => PagingDto })
	paging: PagingDto
	@ApiProperty({ type: () => SearchCriteriaVehicle })
	criteria: SearchCriteriaVehicle
}

export class TrackingVehicleDto {
	vehicle_id?: string
	@ApiProperty()
	lat: string
	@ApiProperty()
	long: string
}
export class VehicleDto {
	@ApiProperty()
	vehicle_name: string
}
export class VehicleAccessDto extends VehicleDto {
	@ApiProperty()
	vehicle_id: string;
}