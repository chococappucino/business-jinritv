import useScript from '../../../hooks/useScript/useScript';

const YoutubeSubButton = props => {
  useScript('https://apis.google.com/js/platform.js');
  return (
    <div
      className="g-ytsubscribe"
      data-channelid={props.channelId} //"UCUNtzYHmJ6ILcMKAOSiUSgQ"
      data-layout="full"
      data-count="default"
    ></div>
  );
};

export default YoutubeSubButton;
