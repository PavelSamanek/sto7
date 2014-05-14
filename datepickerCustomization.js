$(document).ready(function () {

$(".selector").tooltip({
    open: function (event, ui) {
        ui.tooltip.css("max-width", "400px");
    }
});

         
            $(function () {
                $.datepicker.regional['cs'] = {
                    closeText: 'Cerrar',
                    prevText: 'Pøedchozí',
                    nextText: 'Další',
                    currentText: 'Hoy',
                    monthNames: ['Leden', 'Únor', 'Bøezen', 'Duben', 'Kvìten', 'Èerven', 'Èervenec', 'Srpen', 'Záøí', 'Øíjen', 'Listopad', 'Prosinec'],
                    monthNamesShort: ['Le', 'Ún', 'Bø', 'Du', 'Kv', 'Èn', 'Èc', 'Sr', 'Zá', 'Øí', 'Li', 'Pr'],
                    dayNames: ['Nedìle', 'Pondìlí', 'Úterý', 'Støeda', 'Ètvrtek', 'Pátek', 'Sobota'],
                    dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Èt', 'Pá', 'So', ],
                    dayNamesMin: ['Ne', 'Po', 'Út', 'St', 'Èt', 'Pá', 'So'],
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

                var datesAndTips = ['05/18/2014', "Hraní AC Valašské Meziøíèí",
                                    '05/20/2014', "Zkouška",
                                    '05/27/2014', "Zkouška",
                                    '06/01/2014', "Hraní AC Valašské Meziøíèí",
                                    '06/07/2014', "Hraní - svatba Galdovi",
                                    '06/08/2014', "Hraní Kromìøíž"];
             

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