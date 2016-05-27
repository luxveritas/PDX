/**
 * Created by Chris on 5/3/16.
 */
find_sum_pairs([4,6,3,2,9,7], 10);
function find_sum_pairs(arr, sum) {
    var match = [];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] == sum) {
                match.push([arr[i], arr[x]])
            }
        }
    }
    console.log(match);
}

