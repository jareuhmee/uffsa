import React, { useMemo, useState } from 'react';
import { ReactFlow, Background, Controls, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from '@dagrejs/dagre';
import AKATitle from '../../../components/titles/AKA Title/AKATitle';
import aka_data from '../../../data/aka_data.json';
import akaConsolidatedData from '../../../data/akaConsolidated.json';
import raka_data from '../../../data/raka_data.json';
import rakaConsolidated from '../../../data/rakaConsolidated.json';

import './AKA.css';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
  dagreGraph.setGraph({
     rankdir: 'direction',
     nodesep: 90,
     ranksep: 100,
     marginx: 50,
     marginy: 50
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target, { weight: 2 });
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: 'top',
      sourcePosition: 'bottom',
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: newNodes, edges };
};

const AKA = () => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const { nodes, edges } = useMemo(() => {
    const initialNodes = [];
    const initialEdges = [];
    const seenNodes = new Set();
    const sourceSet = new Set();
    const targetSet = new Set();

    const dataToProcess = akaConsolidatedData.pairings;

    const getIsPartOfFamily = (nodeId) => {
      if (!selectedNodeId) return true;
      if (nodeId === selectedNodeId) return true;

      const pairing = akaConsolidatedData.pairings.find(p => p.source === selectedNodeId);
      return pairing ? pairing.targets.includes(nodeId) : false;
    };

    dataToProcess.forEach(pairing => {
      sourceSet.add(pairing.source);
      pairing.targets.forEach(target => targetSet.add(target));
    });

    dataToProcess.forEach((pairing, index) => {
      const { source, targets } = pairing;

      if (!seenNodes.has(source)) {
        const isFamily = getIsPartOfFamily(source);
        let role = sourceSet.has(source) && targetSet.has(source) ? 'big' : 'gbig';
        initialNodes.push({
          id: source,
          data: { label: source },
          position: { x: index * 200, y: 0 },
          className: `node-${role}`,
          style: {
            opacity: selectedNodeId && !isFamily ? 0.3 : 1,
            transition: 'opacity 0.3s ease'
          }
        });
        seenNodes.add(source);
      }

      targets.forEach((target, tIndex) => {
        if (!seenNodes.has(target)) {
          const isFamily = getIsPartOfFamily(target);
          let role = sourceSet.has(target) ? 'big' : 'little';
          initialNodes.push({
            id: target,
            data: { label: target },
            position: { x: index * 200 + tIndex * 50, y: 150 },
            className: `node-${role}`,
            style: {
              opacity: selectedNodeId && !isFamily ? 0.3 : 1,
              transition: 'opacity 0.3s ease'
          }

          });
          seenNodes.add(target);
        }

        // Logic for highlighting the specific lineage
        const isHighlighted = source === selectedNodeId;

        initialEdges.push({
          id: `e-${source}-${target}`,
          source: source,
          target: target,
          type: 'step',
          pathOptions: { borderRadius: 20 },
          animated: isHighlighted,
          style: { 
            stroke: isHighlighted ? '#3B82F6' : '#94a3b8', 
            strokeWidth: isHighlighted ? 4 : 2 
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: isHighlighted ? '#3B82F6' : '#94a3b8',
          },
        });
      });
    });

    return getLayoutedElements(initialNodes, initialEdges);
  }, [selectedNodeId]); 

  return (<>
    <div className='aka-page'>
      <AKATitle color="white" />

      {/* AKA RAKA Tree Container */}
      <div className= 'aka-graph__section'>
        <div id='family-tree-container' className='graph-container'>
          <ReactFlow 
            nodes={nodes} 
            edges={edges} 
            onNodeClick={(event, node) => setSelectedNodeId(node.id)}
            onPaneClick={() => setSelectedNodeId(null)} 
            fitView
            fitViewOptions={{ padding: 0.8 }}
            minZoom={0.05}
          >
          <Background variant="dots" gap={12} size={1} />
          <Controls />
          </ReactFlow>        
          </div>
      </div>

      <div className='aka-description'>
        <div className='aka-description__container'>
          <b>Reverse Ate Kuya Ading</b> <i>(RAKA)</i> is FSA's Big/Little Program during the Spring semester!
          <br /><br />
          We encourage you to be as specific and descriptive as possible in your <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7hxokHYmihDx8ALuuZZ8h1qV-__Ozdc6LTCgDJl2ggp1rUw/viewform">application</a> so we can create the best pamilya for you!
          <br /><br />

          <b>Deadline to submit: February 4, 2026</b>
          <br /><br />
          Once you submit your application, find out your pairing(s) after GBM 2 on February 16th! We hope to see you there!
          <br /><br />
          Check out this past AKA/RAKA video to find out what being a part of the pamilya feels like!
        </div>

        <div className='aka-vid'>
          <div className='vid-container'>
            <iframe className='vid'
              width={1280}
              height={720}
              src="https://www.youtube.com/watch?v=lV77FToQwUg"
              title="Kirby's Raka-venture | RAKA Promo Video 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            />
          </div>
        </div>

        <div className='aka-button__container'>

          <a href='https://docs.google.com/spreadsheets/d/1RwJQLhwU2FMW9KckC8LG8LCx2RZTU310eLROJ8Ox5os/edit?gid=1023977696#gid=1023977696' target="_blank" rel="noopener noreferrer">
            <button className="aka-button title">
              AKA Pairings
            </button>
          </a>

          <a href='https://drive.google.com/drive/https://drive.google.com/drive/folders/1HjQ1HGD7heaTK7d0YMgJ6u0qiPsv_Poj/1KJb04ZV5mhX48P1wkiic38-620ffASxu?usp=drive_link' target="_blank" rel="noopener noreferrer">
            <button className="aka-button title">
              AKA Photos
            </button>
          </a>
        </div>

        {/* <div className='temp-text-container'>
                AKA Description: Our big/little mentorship program <br /><br />
                Embed application <br /><br />
                Event info on AKA/RAKA weeks and woodser <br /><br />
                Feature Pair of the Month + link application <br /><br />
                Embed Pamilya Spotlights from Instagram <br /><br />
                AKA (Ate/Kuya/Ading) is the Filipino Student Association's mentorship program here at UF. Our Membership Team will do their best to pair you with an "Ading" (little) or a "Kuya" (big brother) or an "Ate" (big sister) that best suits you!

                We encourage you to be as specific and descriptive as possible so we can create the best pamilya for you!

                Deadline to submit: FRIDAY, SEPTEMBER 15th @ 11:59PM

                Once you submit your application, find out your pairing(s) at AKA Reveal after FAHM Opening Ceremony on September 24th at Lake Wauburg. We hope to see you there!
              </div> */}
      </div>

    </div >
  </>
  );
}

export default AKA;