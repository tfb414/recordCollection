describe('updateRecords', function(){
  it('Should add an artist to collection', function(){
      expect(updateRecords(5439, "artist", "ABBA")).toEqual(jasmine.objectContaining({
              "artist" : "ABBA"
          }));
  });
  it('Should create then add a track to the tracks array', function(){
      expect(updateRecords(5439, "tracks", "Take a Chance on Me")).toEqual(jasmine.objectContaining({
          "tracks" : ["Take a Chance on Me"]
      }));
  });
  it('Should add an additional track to an already existing tracks array', function(){
      expect(updateRecords(1245, "tracks", "Addicted to Love")).toEqual(jasmine.objectContaining({
          "tracks" : ["Addicted to Love"]
      }));
  });
  it('Should return everything but a deleted prop.', function(){
      expect(updateRecords(2548, "artist", "")).toEqual(jasmine.objectContaining({
          "album": 'Slippery When Wet',
          "tracks": [ 'Let It Rock', 'You Give Love a Bad Name' ]


      }));

  });
});







