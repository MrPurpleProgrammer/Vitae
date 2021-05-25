
import { Howl, Howler } from 'howler';
import { useEffect } from 'react';
import $ from 'jquery'
import './style.scss'
function PurplePiano() {
    var buttons = 256,
        rows = 16;
    var cols = rows;
    var wLoaded = false,
        nLoaded = false;
    var holder,
        note
    var notes = [];
    function loadCount(i) {
        if (i === rows) {
            nLoaded = true;
            if (wLoaded)
                $('#board').removeClass('loading').addClass('forward');
        }
    }
    function bindNote(currNote) {
        $('#board .holder:nth-child(' + cols + 'n + ' + currNote + ')')
            .on('webkitAnimationIteration mozAnimationIteration animationiteration',
                function () {
                    if ($(this).hasClass('active')) {
                        var currNote = $(this).attr('data-note');
                        notes[currNote].play();

                        $(this).find('.ripple').addClass('huzzar').delay(500).queue(function () {
                            $(this).removeClass('huzzar').dequeue();
                        });
                    }
                });
    }
    function bindUserActions() {
        $(note).mousedown(function () {
            $(this).toggleClass("active");
            $(this).parent().toggleClass("active");
        });
        $(document).mousedown(function () {
            $(note).bind('mouseover', function () {
                $(this).toggleClass("active");
                $(this).parent().toggleClass("active");
            });
        }).mouseup(function () {
            $(note).unbind('mouseover');
        });
    }
    function initControls() {
        $('#reset').on('click', function () {
            $('.active').removeClass('active');
        });
        $('#audio').on('click', function () {
            if ($(this).hasClass("mute"))
                Howler.mute(false);
            else
                Howler.mute(true);
            $(this).toggleClass('mute');
        });
        $('.ui-dialog').on('dialogopen', function (event) {
            $('body').addClass('no-overflow');
            Howler.volume(0.5);
            $('#ui-widget-overlay').addClass('visible');
        }).on('dialogclose', function (event) {
            $('body').removeClass('no-overflow');
            Howler.volume(1);
            $('textarea#saveCode').val('');
            $('#ui-widget-overlay').removeClass('visible');
        });
    }
    useEffect(() => {
        holder = $('#board .holder');
        note = $('.note');
        for (var i = 0; i < rows; i++) {
            notes[i] = new Howl({
                src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i + '.mp3',
                'https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/' + i + '.ogg'
                ],
                onload: loadCount(i + 1)
            });
        }

        bindUserActions();
        initControls();

        wLoaded = true;
        if (nLoaded)
            $('#board').removeClass('loading').addClass('forward');

        for (var i = 0; i < rows; i++) {
            bindNote(i);
        }
    }, [])
    return (
        <div id='aligner'>
            <p> Credits to: <a href="https://codepen.io/woodwoerk">Joe Harry</a> </p>
            <h1>(Try clicking on one of the boxes below)</h1>
            {/* <!-- STEP SEQUENCER BOARD --> */}
            <div className='loading' id='board'>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='0'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='1'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='2'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='3'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='4'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='5'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='6'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='7'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='8'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='9'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='10'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='11'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='12'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='13'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='14'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
                <span className='holder' data-note='15'>
                    <div className='note'>
                        <div className='ripple'></div>
                    </div>
                </span>
            </div>
            {/* <!-- BEAT MARKERS --> */}
            <div id='markers'>
                <span>&#8226;</span>
                <span>&#9702;</span>
                <span>&#9702;</span>
                <span>&#9702;</span>
                <span>&#8226;</span>
                <span>&#9702;</span>
                <span>&#9702;</span>
                <span>&#9702;</span>
                <span>&#8226;</span>
                <span>&#9702;</span>
                <span>&#9702;</span>
                <span>&#9702;</span>
                <span>&#8226;</span>
                <span>&#9702;</span>
                <span>&#9702;</span>
                <span>&#9702;</span>
            </div>
            {/* <!-- CONTROLS -->
            <!-- All SVG icons from www.flaticon.com -->
            <!-- TODO: optimise the hell out of these --> */}
            <div id='controls'>
                <div className='button' id='audio'>
                    <svg version='1.1' viewBox='0 0 513.32 513.32' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M139.023,128.33H42.777v256.66h96.247l85.553,128.33h74.859V0h-74.859L139.023,128.33z M256.66,42.777v427.767h-8.555l-85.553-128.33H85.553V171.107h76.998l85.553-128.33C248.104,42.777,256.66,42.777,256.66,42.777z'></path>
                        <rect height='128.33' width='42.777' x='427.767' y='213.883'></rect>
                        <rect height='256.66' width='42.777' x='342.213' y='149.718'></rect>
                    </svg>
                </div>
                <div className='button' id='reset'>
                    <svg version='1.1' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z'></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default PurplePiano;