import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateVN'
})
export class DateVNPipe implements PipeTransform {

  transform(date: any): string {
    var d = new Date(date);
    var weekday = new Array(7);
    weekday[6] = "Chủ Nhật, ngày ";
    weekday[0] = "Thứ 2, ngày ";
    weekday[1] = "Thứ 3, ngày ";
    weekday[2] = "Thứ 4, ngày ";
    weekday[3] = "Thứ 5, ngày ";
    weekday[4] = "Thứ 6, ngày ";
    weekday[5] = "Thứ 7, ngày ";
    return weekday[d.getDay()] + (d.getUTCDate() + 1) + '/' + (d.getUTCMonth() + 1) + '/' + d.getUTCFullYear();
  }

}
