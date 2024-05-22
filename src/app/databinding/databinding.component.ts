import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
constructor(){}
ngOnInit():void{
 
}
name:string='Srinath'
txtAreaValue:string=""
txtAreaCount:number=0
updateCharacterCount(){
  this.txtAreaCount=this.txtAreaValue.length
}
sachinImage:string='data:image/jpeg;base64,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'
flowerImage:string='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EADsQAAIBAwIDBgMGBQMFAQAAAAECAwAEEQUhEjFBEyJRYXGBMpGhBhQjsdHwFUJSYsEzguEkQ3KS8SX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/APbwMU6kpagSms4X4tqdn3qu1LTRqLxLJcSxwpkskWPxD04iQdhvt479KCXHd28jcMc8bt4KwJ+lRNUTtfu8BAw8oznrw5b/ABUKKzEV41ndIs0Uilo5CuSfFWHjvsf03dfWF5HAP4fN3omV1hkJKnB5A8xn3Hl1oE1CxeWMSW7FZUzh/UY/4rvpU3aWixhSrRDDKemOlcNOvpnmmgnRo2He4XGCP38tqVpkiurkg8JaLib1xj9Kii67OURiTDBgWf8AuGeXualW1vAv42wZ9jnoPAeVUbXCBIeJ/wDtqu3Q8/8AFC6ot4QlpNG0jvgcLbovjj0396C1vZ+ORYoQxSNwXKDJwOlSm1IKcvBMB1+E4+tcLe5jTht4F7y/ESuynzPjXS6niitndFDMNs4+JqAXWbdrhYuyuQG/nMJwPUcx7irKolhbCCEFsdq28hHU+BqVVQuaWm0tEGaWm9aXNAtGaTNFFLRSCigWiiigKSlpjyLGpZzhQMknpQcLmO5kA+7TJEcfE0Zc+24A+tVv3cTytHeXN12q4OFlZVI8Rw4yM7Ug1Oe+lItI5IoBusrgBn9AwO3XlXSXT5btklmuJuRC8gBnGeQB6DmTyoG3dstpEkyzTMIWD8EkhfI5HGd+ROOVWiyrwLg5GPi8qrhpMUfN7pmX4XjmI+gwPnmowM9qvZqxlCjuOFxIB4FevqvyqDvqhXgaQHLpkp0II6elY/UtdXikjgQvJJhN2wMZJO/jVnrOrgWvbocPuhXGQGHp5ZrA3JQNGWLOxXOSN+vPi5Dn+m1MazEjUNVmukRJnOFJPDgDGMkbEdMnfPtUOE8MizWyntkyRIGI4c9f+OtcZmBkbmVG+VkUEemTmp9vInYBgSzP/ccN+/GqrX/Z7VGmtuyYyyXK/wCqQCTjxBHjy8q0dszu0bTwylE+CCNNk82JIyfy86x/2YkuE1B0j4140GQo4ScefMfL5Vv4i8cIaQgt1wDt9TUTXaC6hlJSN1LjcryI9q7ZqjZZb6VZLR+zETZE5XYnwHiPM1cpxYHHjixvjlVZ07ip2abikziiFNGaQmjNAoNOzTBS0D6Wm0tFLRRRQFRb61W9tZLZ2KxyDhbHVeo9+VSKKCk1DShbxrdaWgimi3Ma54ZV8CM8+udj51Isb1ZsAjmM5G4PuKs8bYBxUG5sbYsZ3YwsN2dWwPU529+dQSS+PEemDUC8CTRkcPaDmTGd/XH61CNzc95rR8wLykukADDxGANvA8z0BG9QUn1C8uzxJA0A+KUKyFfAjcn/ADRWf+1cXZ/imUENuwYhTkcidscuoI96yZYM0ZjUKc8nH8vtWu+1yzi1DN2jKhzxPABk+Rzk5GfOstC+VyrbkZG2/j0z89/ajWI0ciuzK7HnhQFwD7A/XHvUjTowW4YlXC74YfEPHz+RpyWpZpW4wqyfEoXOT57VN063AUpChaQtvg4GfDzqi60CKSK4M0EgB4eHaXhPP3JPyNbCCzkuIwtw10Vbn/1JI+VUmgo8FssNyqgruVMZbH6D0BrVWro0YaKSLh6hTkVms648TWDKRk2w2KnJMfoccqsVZSAR15VXz3kbKyBxIQccMa8RHsM1G07UEhmWznyiv/omRSv+3eqi6zSNS0hohM0tNozRT6UUzNOBoHigUgNLVC0UlFAUGig0ADVXqTJPdW9m6hkfMrKeRAIGD7nPtVlWfvrqOH7RCWSQKkdsuT4ZZv0qDteH71ciBXwEbvFf8ef/AN6VMAiS24O6FT4gBkD36ms+9pfme5ntXkRLhhkzRjvk8uFTkjzJxy5Gn3VnK9ifvs0jK7fC5Gw9AME/vaiuF1ax608qLHxWw2kmI3fwVP6enerFavpz2d/IILduwkbhjITO4x5n616iloILWOBMA7M5HU+XlUaCFTxLn8SOYk7cwcYx8qLXm9mB2MYLghiFZ9skemce9aSz0eey1BGgkMiD4OLOeE1oZrSJL6FCu7owzjHDuK6LIsBWC4AyD+HIeR8qKS14RN93dcFd426gf0+nlUm6sLW53kij4/HgBFQr2dklt+yVWcvwgcufTPjStqUsG1zbzRH+5Nh7jb61EWtk3/TqoVQRsQuwyPapQ8TVPo90kxnCOGw+dsHGRXCy1G6jvJYbodrGXZYnCBW4h/KcYBz0qstCDTSap7bX7Sa4NvKk9tMDgpOnD9QSPrViJAy8SnIzjNCOppM0wnBxz9KcDQOpQaZThQdAaeDXIU4GqjpRSA0lAtHOgUCiiohsbY3YuzCpnAAEh3IA8PDmeXjUs007VBDkPaajDEcERxmRvHJwB9C3yqPrIAECLgAyIuPLiFV0et2kV1cTyyIZpW4Y0DZZkXIGBzO/EfcVX6vr7SXUEUlvLEqyI5aTulRnPI79PCitagVuFsb5qi1qWW2vY5bdSTg9ov8AaB+eauYZA0YYHkOXnUAF5bwcagxyowjPiQf38qCNp1yNRvZZ1PFwMAF/txuf34VZ39ql1CwK5rha2ZEJktwFlDsEHIMPA+WfrUmO6WQYOUYfEh5ii1m5rWSG17drnKW83wycsA881Y6lZR31sZHLo6rxR4clBtnBUd1vlUqG0FzY3Ecgys0jFWXfbpiqyxtLmJZ7ZZezlGVdSA0cgI+LGdiR4YpEp2mXMVuUdwyxTKoLnJMbeBJzlT9K6QY1GyManviQyhlPXPMGlt0ktF7OWNGgx8ajB+XhTZLT7kRfWhHY85I1GAv9w/SioVysk16FuSZWjQK5IxxqSdjXbS1NhcfdmH4R7oGTt4ev/wAqYnZT6jcEf9yJHzRIEMZcnvDk3XxqUd7+9axhM/YvMi47TgbvKPIcvrUy3nSeNZIm4kYZBFUWoXbXttJa2eZDKOB5B8IHUg9fXl51K+zkqvBcouAI7hlKj9+eapF0KcKjwXVvPI8cUqs6fEB0qSBRkq06minCiFGaKXYUVQtFFHKilpDim5pTUHGK2ggBEEMcWTv2aAZ+lYq7tPv180nS4vzG+5+FTwn6LW6INZJAIWQnA7PUcv5B3Ofo1FxZ6eHu7aJFI7JABLIP5z4Cp17amaBUhKo6EFCRso5EfKpMcSRRhIlCqgwFXkPSlxRDYUEUYQbgDY1Wa5HEIGuHlMDxjHaKnEWB6ADnVqN+VRr6C2miDXoRokPF+J8IPiQdqChtrq/uIVjhlS0gTZVK8ch8yxyoPoK7rDdWdzFLcTSSqw7MswBx1GCAOtcbiW3tbkT2cU4gfaVVhKoR/UowPpVoHimtfwZBJA42xvRTpJf6lGcZI5+1Zw6okC3lqzHgSN+AeXMfnXXVLyaKNSiiUIdpFOGXybxHvWLvruaW4YKSoYEHAxn98v8AFGl7aal2C2LMxDtaqrZ5knl+VSLnU2kiMQXOU3GOrHl8jWLnjTcudwNgc4+vPFdrS9urJ45kbjIORxrv6b7j1HjypB6XpyKkQDAZAwR4Gq6Jpl1Ga2Q8MMhyRjG+T/jn6CoOl/aG1lt8RsPvGwETfHnxPkKsbNINQma5cExtjs1zzXHxH1/KiJ1hJaWd3P2s8SHhVI1Z1HiSQM9SSauYLq3nA7CZJARnKMG/Kq+aCBYuFYo+WCCuR8v1qssdAGoS/wAQ7T7qp70LW6KjkdGJxyPhz5b9KMtR1xing71ygWRIVWVgzgbsBjPtT6DpSU3NFUdBSmkFNJxQLiilzTeLJxg+9QKayWpwGPWLm2biVbyISRk8uIbH5d351q+IGqX7R2Ut9aK9rg3MLccW/XqPcbUFjpd598skkfAf4XA6MNj9RUsjFZPQtTAuFfiYLcELKhHwS8hn15HzArVuds0XQ48KzGpalK2qNG9ncG2gwA3YOys3U5x0rTJ3hvQU2PSiM/datby26djiWRzwqOM4z5kHbHhzrhaaTIzNOJ5BK/xGLZD/ALTz/PzqTqVlBBfNduZpbifEccS8ILY6ZIzgczTIru+s3K3C/eUPRQoZPLPX6UVQ68LqyDrO6EldjwGNnHzIJFYp5j2mwVzjugA7/rXpeoSQajayCGVWA+KGUdfAivOL3hW7mjjjMajPc6j0zRrHF+JzgngVW5jb29PrRMkeF7uQMEDB73mPL97Vzhm7oaKNcDYtnlt4nkKJ3BHAC5HhxZG/0+ooFhu+xIZD3kGAOIrxL1XbptzP5Vv9GueNe4S+QDnkqbciTt7V5+gJOOORmHMljwjzz0J+daD7MvNPCYnNzwxHhCqQAAfMD/I50G1u27WM2iMS7/6gRsYQ8zn05GrlLtFRMQMFHLhxt9aqtLhhhiVIUWMdQQGYnxJOST5kk1cRJxjDb+oAozrpHPFND2kTca8sjx8PI+RpwYYzmquYfc5jLGXVWYF1xlW9PA+/ljliwgkS5hWSPBBojpnNFN5UUHcUjClTcZqNqV/babZS3d5JwQx/EeuegA6k0HSWVIkLyMFUc2Y4AqruNeV1xp9s93jm4cRxj/cefsKq4En1pxeaniO3XvQ2XFhUHi/9TeXIVLn+7k9rO6xjfADc/fNSrB/ENVZA0kVhEMZwzt+dEGvdqzJcWkpYH4rU9uh+WGHy6Vi/tFPYXcpt9OgmaUkqGWVsSN1AGSMDqcbdM1P+zFnLPoMis5EkoLNgnYnkF8AD0qrEjU7i0i1ZpVciC7UpcRMhjkjY8m4WAIB5Z5ZHOtLpGqfeFa1uDm4hAwx27Vejj/PnWej0WS70qB7e4++owJa3u1wQw2PCy44SCDjAHrXPTpldjbrJJBdwN+FHcplo2/pz1UjofXPWg3UbAV0duHnVfpl6lzGGUFWB4WjxujDmKsOYzRnWSfV4p9Tkk7aJXUmKNHkUMB12z1NXdvNx4Vz6Z2qa8McgKyIrqeYZc5+dZswqtzL91uZre1jOFVWBDHyyNh4b+mKLjrrVtZbCSBJHbcIEDlvY1iNY0lWZ544xCy7sA2Vx54AA9ATXoFq1vGCSMu27MxyfUmqbV0/iQMsYb7sGxGBsHPVseHQUXHnMIUFg/LOAnIZHlST95gC22wZcbZ9R+la+fQY5oU7mGeR0Zh5ctuVZvULaaxGZRxNnZgcg+21FQlBbvs+eLYM44jjY8999uZHritB9lmmWR+HgWNjsgJwzZ5+X15fKmsraS7mjC4ADbkju+m3ywcVttJj+6PiS2Yp07mWT57kem/n0BVtb3U0Yy9tIfHgII/OrBdVhdOACVXx8DwuCfQY39qbDqNmqkdou3PDjb15YrhqV0Uh7W2YsIx2gXptv4UZSobO4uXDyO9vGOQAy7eueQqZY2IshIiuzox4hxgZB69K7xuHAdDlSAQehH7NdC9EpjUUjGiiOqnhjyTWP1GZta+0TQAcVpp57qnkZiO8x/wDEHhHgS3ljVXkz21lPMkRleOJnWNdy5AyAKw32YW6hS5ivEjF0spWTgbiDN/Nk9e8T75NFxdzqWPZid4V5ZXHEP8D3rL/aWXR4UaMG5uLg/wA5uXODy5Z3J5VP1KXTraKR74yTmMbqzsFz4BVIBNZLT4F1C8e/jURrDOAiR5IJzjPmBtikaXv2d02bT9aR7sby26mGMDuxLk5Ue+Mnqa0OkIbe4njUcKpOcDyO/wBMmpU1lELizuSwXslwe9jukfqBzrjqGo2OnpM5ZO1cgAE/E2MbeNBI0YhbzUbUYxHPxqP/ACGcfMZ96XXtKF6i3dtEjX1uv4bFd2XquaPszY3EME93fIUuLl+0KH+VQMD3xV6u4OSfejNZKyv+8t9Ap4gOC6jxuwG3FjxH/Fa2GRJoEkiYOjDII61mNbtW06/W/jP/AEtweCZcfA3Q+h/P3rtoUp0++bTpH4oplMtqT4fzL7UNaM/vFYXUrExI0JupZBHIe0kidkGSciNQOu+5Ofatje3H3a3aT+bkg55Y8hVRp1v94vu8eKO1wzNzDynmfagiR6RHZ6RHHcK7zTyIGEjs4TJ5YJwcYq+NqpRVxhFwQMdB0purbWyOOSTIWPln/mpIlynd3wDQqotEVpJ4yBmOViB61Va5o6Tz2vcXcPkY8hUu9nFnqHG2Qk/d4R0Ycvp+VLY3f8Sl40XMMWVDnqTzI8tqjSl/hgRjEY07N49lC4GOv+PzqfpoZJfutz8arlHOwkA8eeCNqvp4FE1sxXcHh9QQf0qFrMSw24mA3t2Lg9cDn9M1SnT6dDfRq0intBsrdQP19KdDYwTo0Msaw3CYJkg/DD5zhiBz5EYOdxS2t3HNBxwyBgfDmPXwPlRb3PHq6IOZhbPhgEfv3qVFnp8LW9lBA7cTRxKhI6kADNdiKENKTVZcnG9FDb0UHYd5Sc4wNsV53pcjxRalIGJZrqQ5PQ8Tcv30ooouKPVYleCxLZJnuuyY5PdHl578/wDmtFoNnBD9+jiQKoJ4QOnI7e5ooo0lwtLqusy2M08kUMUPafgkKzeRPh6YPnVvBpWn6WXmtLOMTKBiVyXb5k5oooi4QcKsR0NObY7UUUZcdRt47i0mhlHFG68JHlWMW4kbQoLotme1lVo365zg59RsaKKLi/1CVjNbDO3Cz48wNq6aAP8A86Js7yAyMfEk0UUFjcxpJDIjjIK4PvVBY3U3Ag485IUn3xmiiiOsdpFqWlXEtznjnRlypx2YB2C+HjSaGqixiCqAFQYxRRUaPv7mVL2wRT3WkbP/AKmnakxa3lDbjbb2ooqiru2MT6dNH3XuFKSkbcWE4gfXz8Pap2gqJLy+uG3kBSMeAHCrbe5+gooqC+WlNFFVk2iiig//2Q=='
}