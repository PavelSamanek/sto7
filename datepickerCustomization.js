$(document).ready(function () {

$(".selector").tooltip({
    open: function (event, ui) {
        ui.tooltip.css("max-width", "400px");
    }
});

         
            $(function () {
                $.datepicker.regional['cs'] = {
                    closeText: 'Cerrar',
                    prevText: 'P�edchoz�',
                    nextText: 'Dal��',
                    currentText: 'Hoy',
                    monthNames: ['Leden', '�nor', 'B�ezen', 'Duben', 'Kv�ten', '�erven', '�ervenec', 'Srpen', 'Z���', '��jen', 'Listopad', 'Prosinec'],
                    monthNamesShort: ['Le', '�n', 'B�', 'Du', 'Kv', '�n', '�c', 'Sr', 'Z�', '��', 'Li', 'Pr'],
                    dayNames: ['Ned�le', 'Pond�l�', '�ter�', 'St�eda', '�tvrtek', 'P�tek', 'Sobota'],
                    dayNamesShort: ['Ne', 'Po', '�t', 'St', '�t', 'P�', 'So', ],
                    dayNamesMin: ['Ne', 'Po', '�t', 'St', '�t', 'P�', 'So'],
                    weekHeader: 'Sm',
                    dateFormat: 'dd.mm.yy',
                    firstDay: 1,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''
                };

                $.datepicker.setDefaults($.datepicker.regional['cs']);

                $("#datepicker").tooltip({
                    show: {
                        effect: "slideDown",
                        delay: 0
                    }
                });

                var datesAndTips = ['05/18/2014', "Hran� AC Vala�sk� Mezi����",
                                    '05/20/2014', "Zkou�ka",
                                    '05/27/2014', "Zkou�ka",
                                    '06/01/2014', "Hran� AC Vala�sk� Mezi����",
                                    '06/07/2014', "Hran� - svatba Galdovi",
                                    '06/08/2014', "Hran� Krom���"];
             

                $('#datepicker').datepicker({
                    dateFormat: 'dd/mm/yy',
                    beforeShowDay: highlightDays,
                }).draggable();

                function highlightDays(date) {
                    for (var i = 0; i < datesAndTips.length; i=i+2) {
                        dateToCompare = new Date(datesAndTips[i]);
                        if (dateToCompare.getTime() == date.getTime()) {
                            return [true, 'highlight', datesAndTips[i+1]];
                        }
                    }
                     return [true, ''];
                   
                }

            });
        });