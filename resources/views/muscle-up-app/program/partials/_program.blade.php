<tr>
    <td style="text-align: center">
        <?php echo $count;?>
    </td>
    <td>
        <select class="form-control day_name"  name="phase_id[]" id="">
            <option value="{{$programPhase->phase_id}}">{{$programPhase->phase->title}}</option>
            @foreach($phases as $phase)
                <option  value="{{$phase->id}}">{{$phase->title}}</option>
            @endforeach
        </select>
    </td>
</tr>