<script>
    import { SliceZone } from "@prismicio/svelte";
    import { components } from "$lib/slices";

    export let data
</script>
<body>
    <article>
        <SliceZone slices={data.slices} {components} />
    <header>
        <h1>{data.name}</h1>
        <p><em> Tweede jaar Front-end Developer</em></p>
        <h2>
            1998 <br />
            Geborteplaats : Napels
        </h2>
    </header>
    <div>
        <h1>Mijn Skills</h1>
        <ul>
            <li>
                Ik spreek Italiaans, Spaans, Frans, Nederlands, <br />
                Engels en Arabisch
            </li>

            <li>
                Nu leer ik programmeer talen zoals JavaScrip<br/>
                en compilers zoals Svelte-Kit.
            </li>
        </ul>
    </div>
    <div class="hobbies">
        <h1>Mijn Hobbies</h1>
        <ul>
            <li>
                Ik houd van zingen, dansen, zeilen, reizen,<br/>
                tekenen en vooral strijden voor goede doelen.
            </li>
        </ul>
    </div>
        <h6>My favorite cit </h6>
        <p>
            "Beter om op een dag als leeuw te leven, dan honderd jaar als schaap."<br/>
            cit. Giovanni Falcone.<br/>
            Siciliaanse rechter vermoord door de Mafia.</p>
</article>
</body>

<style>
    * {
        box-sizing:border-box;
    }

    html {
        height:100vh;
    }

    body {
        height:150vh;
        font-family: open sans;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#143b2e;
        background-color:#D2E69C;

    }

    article {
        width:300vw;
        max-width: 60em;
        min-width:50em;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
        background: #28B5B5;
        box-shadow:0 0 20px 20px rgba(0,0,0,.1);
        border-radius:2rem;
        position: relative;
        margin-top: 8rem;
    }

    header {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        justify-content:flex-end;

    }

    h1 {
        margin:8rem 0 1rem;
        color: #002B5B;
    }
    div h1 {
        margin:1rem 0 1rem;
        color: rgb(8, 1, 85);

    }
    p {
        margin:0
    }

    article p {
        padding:2rem 4rem;
        margin-top: 0;
        background:rgba(5, 79, 98, 0.5);
        text-align:center;
        border-radius: 0 0 1rem 1rem;
        width:100%;
    }


    h2{
        color:rgb(49, 5, 54);

    }
    p{
        font-size: 20px;
        color:azure;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    }


    #foto3 {
        box-shadow: 10px 5px 10px darkblue;

    }

    #foto1{
        box-shadow: 5px 10px 15px black;

    }
    li{

        font-size: 25px;
        color:rgb(45, 36, 24)
    }
    div{
        background-color: rgb(215, 207, 97);
        margin-top: 50px ;
        border-radius: 25px;
        transform: perspective(25cm) rotateX(-16deg) rotateY(25deg);
        padding: 20px;
        box-shadow: 5px 10px 15px black;
    }

    ::selection {
        color: black;
        background-color: #F0EEC9;
    }
    .hobbies{
        background-color: rgb(215, 207, 97);
        margin-top: 50px ;
        border-radius: 25px;
        transform: perspective( 26cm) rotateX(-16deg) rotateY(25deg);
        padding: 20px;
        box-shadow: 5px 10px 15px black;

    }
</style>